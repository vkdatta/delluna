export const name="smiley-nervous-light";
export const id="dl_93b4b74a47567fbf8354";
export const url=new URL("../icons/smiley-nervous-light.svg?v=cfcbe542c5c9e782604cac0ba2fcf848586ad6cf81454ec079826e657564168c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
