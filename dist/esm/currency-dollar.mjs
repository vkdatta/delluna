export const name="currency-dollar";
export const id="dl_ff232ce2cd3346d0bf86";
export const url=new URL("../icons/currency-dollar.svg?v=00fbde8cbb0ba8bfb940c4ff9620394686e053c22d4b983e13a45fc985084d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
