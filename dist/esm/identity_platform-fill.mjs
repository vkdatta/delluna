export const name="identity_platform-fill";
export const id="dl_ab75ae77ce6b626ff849";
export const url=new URL("../icons/identity_platform-fill.svg?v=bb4803e1b0c5b6c379b587a732d5bf5cb96713f67fd1941dc2d2c73d4bced2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
