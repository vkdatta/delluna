export const name="multimodal_hand_eye";
export const id="dl_3fed725c5fa488313b94";
export const url=new URL("../icons/multimodal_hand_eye.svg?v=458525438f8eb9deab009a86347209f5435de5a1db9960db2387db2bbe58fbf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
