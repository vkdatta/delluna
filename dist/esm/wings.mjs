export const name="wings";
export const id="dl_23bec35753454e26960d";
export const url=new URL("../icons/wings.svg?v=816ad2ab8fc79ae6b1ec0580d877d1843d7292754e68af331ac08b1c2e072820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
