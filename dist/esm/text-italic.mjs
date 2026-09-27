export const name="text-italic";
export const id="dl_c07daf48562c85f3b40c";
export const url=new URL("../icons/text-italic.svg?v=f28d8fa7b9a603e6ed839d7c020c84f513d5f5456df2b8e4b137c08afe588529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
