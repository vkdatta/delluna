export const name="avocado-bold";
export const id="dl_288fb05a8b654eacad69";
export const url=new URL("../icons/avocado-bold.svg?v=549650da78528fba3d53cc5735b0e542c34041ee19a5e97ae45e041bc43cb30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
