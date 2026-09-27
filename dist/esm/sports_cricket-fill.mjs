export const name="sports_cricket-fill";
export const id="dl_4e04e4940e8d46be63f9";
export const url=new URL("../icons/sports_cricket-fill.svg?v=6c73473f5a0d2c38f4606e46ed848cc6bd84fdc13d66009719e55a55a78bf94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
