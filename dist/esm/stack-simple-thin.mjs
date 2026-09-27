export const name="stack-simple-thin";
export const id="dl_b1b975b5b5f40ca1e601";
export const url=new URL("../icons/stack-simple-thin.svg?v=125b9a2513c61b6df24c8c7cfe0047e91d424d5944153cc72ba5ff86da712962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
