export const name="windshield_defrost_auto";
export const id="dl_7b02854adbc4e6f9eb4f";
export const url=new URL("../icons/windshield_defrost_auto.svg?v=9cb87293f5bec978d6019ba28f53a7ef16160626172866fbd37e43557bc13de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
