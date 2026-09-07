export const name="lucid_3-mic-off";
export const id="dl_5d211a81cb3248afa3c2";
export const url=new URL("../icons/lucid_3-mic-off.svg?v=89b7d2e0fe9fc7bae9f666a6b06b1decfa857a1fa21d4504802d9ad8e8081e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
