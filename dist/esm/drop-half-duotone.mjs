export const name="drop-half-duotone";
export const id="dl_1052a18b69b1465a99c5";
export const url=new URL("../icons/drop-half-duotone.svg?v=dd8f8571823d8007befec89335c5b99c16330e82de63ced832fe150da118440c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
