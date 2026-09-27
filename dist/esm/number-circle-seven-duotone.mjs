export const name="number-circle-seven-duotone";
export const id="dl_613193f176e8462586b5";
export const url=new URL("../icons/number-circle-seven-duotone.svg?v=372b79995679952e94407a61f85c710238edb1de4b5c25765fea401db489c820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
