export const name="format_image_front";
export const id="dl_a1ebd10ceefe4746b290";
export const url=new URL("../icons/format_image_front.svg?v=3150338565966a8c2a82e2c35e900c68140961e378ea420a4de573054b3f5572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
