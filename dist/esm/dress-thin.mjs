export const name="dress-thin";
export const id="dl_e930d42a44974384a5b7";
export const url=new URL("../icons/dress-thin.svg?v=39bc6c938e0163499addc2f919cba6d078e104c1d273dc76c7d97b1ff8119180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
