export const name="expand_circle_down";
export const id="dl_d23ee7f096e8fe1c964b";
export const url=new URL("../icons/expand_circle_down.svg?v=5e9ea195aab65d3e4f6b34c1d1c560a917b22a12c458a8bce91340dce51ca287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
