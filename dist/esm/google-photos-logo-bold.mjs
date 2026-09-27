export const name="google-photos-logo-bold";
export const id="dl_c7e6502df38340a99ce7";
export const url=new URL("../icons/google-photos-logo-bold.svg?v=56792b4b8ec571a1603478b545eefb3b50780526a857367136ee88dea06480db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
