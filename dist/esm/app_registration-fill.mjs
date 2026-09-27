export const name="app_registration-fill";
export const id="dl_a4d8d61e67d34b9d74ac";
export const url=new URL("../icons/app_registration-fill.svg?v=1b27d828bf8c73d6d18455a808b3c54fd2931a5c924e6572510cb60ab8e1bc4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
