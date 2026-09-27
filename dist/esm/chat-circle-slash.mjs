export const name="chat-circle-slash";
export const id="dl_aa3d5679c56b4c8ba6f5";
export const url=new URL("../icons/chat-circle-slash.svg?v=3501238499b7ebeeb92bba5bafa67e0f790f01559ab3decd59210e5f1565dd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
