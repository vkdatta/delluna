export const name="number-square-five-duotone";
export const id="dl_c78ae8b7916d4b7a8ae7";
export const url=new URL("../icons/number-square-five-duotone.svg?v=00e216e0eb881e004e49f6b6b8df763299bf4fb6859dfececf55ce4155f4434e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
