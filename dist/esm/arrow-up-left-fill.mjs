export const name="arrow-up-left-fill";
export const id="dl_c42d3d57eff641609780";
export const url=new URL("../icons/arrow-up-left-fill.svg?v=697bec91a0a49a19ba7e596c6f5e55fc17015b9a6c60c739463cb95d370b050d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
