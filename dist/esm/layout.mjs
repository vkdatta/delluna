export const name="layout";
export const id="dl_562136fbbc1b4a229a80";
export const url=new URL("../icons/layout.svg?v=8bc7866bf4183c7cb4c9aa8cb77f3abd2a71d6ea38d238b08ba28553862260af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
