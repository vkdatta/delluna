export const name="flag_check";
export const id="dl_794560d62e9f32ce3b1c";
export const url=new URL("../icons/flag_check.svg?v=9de5c5286d888cd14c5b938e2bb2add29652287d3fc5cc7ca11d9b3670abf63b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
