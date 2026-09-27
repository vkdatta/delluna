export const name="pen-nib-light";
export const id="dl_de08daae255d46bf9af2";
export const url=new URL("../icons/pen-nib-light.svg?v=3b9abb4d8384b4f67375547e7cde5bb458769e4fc59c80f30f826eefa9e9b112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
