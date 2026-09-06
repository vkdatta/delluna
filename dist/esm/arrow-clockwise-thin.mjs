export const name="arrow-clockwise-thin";
export const id="dl_8b2ad88ee1aa4ab29c0c";
export const url=new URL("../icons/arrow-clockwise-thin.svg?v=d730362d67f49722fc29a9270f728e45262eb5a3da64ee9c91c88999203914af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
