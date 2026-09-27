export const name="train-front";
export const id="dl_c80a97aaa8d14433953c";
export const url=new URL("../icons/train-front.svg?v=fbc6ebfdd626e2e523b35cb0e4f97cac76de65a93c0aff1687cb9755872ffdd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
