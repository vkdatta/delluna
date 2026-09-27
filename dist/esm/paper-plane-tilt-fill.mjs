export const name="paper-plane-tilt-fill";
export const id="dl_c05ae0a0d5944f768cf0";
export const url=new URL("../icons/paper-plane-tilt-fill.svg?v=1bf66ce51d90daca2f643892a038fe27d7d42218c7dabc7220709d2a4731496d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
