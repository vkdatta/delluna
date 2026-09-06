export const name="currency-rub-light";
export const id="dl_3d1c456d4f704b0a8037";
export const url=new URL("../icons/currency-rub-light.svg?v=60d283318643cf0b7fd3af45ce68f7957c88371d1cac4d3646ff66b36b06e47f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
