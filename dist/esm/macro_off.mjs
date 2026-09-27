export const name="macro_off";
export const id="dl_5076a767107590a0dca9";
export const url=new URL("../icons/macro_off.svg?v=cecbfc5b5e4564d8707ff18a61100b5f207859c236b471604fbc84aa48e5273f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
