export const name="washing-machine-light";
export const id="dl_f8f65add6a6d7b9c6b12";
export const url=new URL("../icons/washing-machine-light.svg?v=9b2e4b80b87efb2ff9cea45a96e931886dcd14b817f722e5d6cf42cc1b292db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
