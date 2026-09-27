export const name="check_circle";
export const id="dl_e02b0781be7bc68eb99c";
export const url=new URL("../icons/check_circle.svg?v=763a5d4921a4f4407bae24af027241169324c91547efb0daaf7f2e20feeb15a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
