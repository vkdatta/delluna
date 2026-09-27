export const name="lucid_3-rectangle-goggles";
export const id="dl_5ff7e55634614577a66d";
export const url=new URL("../icons/lucid_3-rectangle-goggles.svg?v=2d5002e425cece9f3456ae466c399fc6e15549efe3dcf8714339011657f88187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
