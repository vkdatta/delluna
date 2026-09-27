export const name="bell-simple-ringing";
export const id="dl_e46a335edd854eaab98b";
export const url=new URL("../icons/bell-simple-ringing.svg?v=44cd152885b62cd91e4ec37728a4ab26fa596b97237bd7b5033d984721e85199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
