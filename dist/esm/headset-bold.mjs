export const name="headset-bold";
export const id="dl_fd0fa3ed67024c30adcc";
export const url=new URL("../icons/headset-bold.svg?v=e077615e3a5fa48d9c7ec8ce0d988d9f583100a52fe72d4a49ee2610f1b22099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
