export const name="sports_football-fill";
export const id="dl_32a67e20de880cc98225";
export const url=new URL("../icons/sports_football-fill.svg?v=b8eac2af3e4ada7f35ef2c5d111876cb9aab02ecc2d05e85d055db26ac3017d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
