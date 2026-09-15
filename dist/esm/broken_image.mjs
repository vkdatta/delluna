export const name="broken_image";
export const id="dl_b368b61dbf0a49889c5d";
export const url=new URL("../icons/B/broken_image.svg?v=f32d60d79de6c5cb47bf0c7a03fb9d7a08b795db1e94abc1ce7b10aa7b399763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
