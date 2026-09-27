export const name="thumbs-down-thin";
export const id="dl_25bdc1375d37d510b00c";
export const url=new URL("../icons/thumbs-down-thin.svg?v=681e19a7953ae82b474b2e592cf4b4c06b780e187d603fce8fc5327885e4621c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
