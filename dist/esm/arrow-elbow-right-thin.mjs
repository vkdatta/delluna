export const name="arrow-elbow-right-thin";
export const id="dl_9cbc81a5a19a4cffad7b";
export const url=new URL("../icons/arrow-elbow-right-thin.svg?v=d16795554dd38cc0e7cd69161ea57c79c3abef510be1603ff2ecee92423d9336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
