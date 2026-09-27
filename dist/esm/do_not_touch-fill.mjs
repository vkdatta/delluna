export const name="do_not_touch-fill";
export const id="dl_65bea2ba3dbe2704b9e6";
export const url=new URL("../icons/do_not_touch-fill.svg?v=df97f9bdfd76b504e695962c10c7ddeaa9777e550520d5c64ede9344a00872f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
