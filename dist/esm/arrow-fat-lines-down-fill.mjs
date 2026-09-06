export const name="arrow-fat-lines-down-fill";
export const id="dl_0cc59d3f68074393bca2";
export const url=new URL("../icons/arrow-fat-lines-down-fill.svg?v=1a53d11bd11fbfcba3af7627f96eed6935e91310d47bf5a26dc2faaf8f12bb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
