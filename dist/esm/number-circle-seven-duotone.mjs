export const name="number-circle-seven-duotone";
export const id="dl_613193f176e8462586b5";
export const url=new URL("../icons/number-circle-seven-duotone.svg?v=bcb0a8fc6e5bded7ff06af042760414ccf33b6823df6e2f910d9872679e58cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
