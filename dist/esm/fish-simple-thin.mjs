export const name="fish-simple-thin";
export const id="dl_19933477be6a4fb7810d";
export const url=new URL("../icons/fish-simple-thin.svg?v=ae7ad45ff8ac4a6a02a476e8a255baa7b1edd869adf650489583e3420b4f6352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
