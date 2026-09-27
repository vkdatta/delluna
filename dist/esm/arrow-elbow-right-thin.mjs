export const name="arrow-elbow-right-thin";
export const id="dl_9cbc81a5a19a4cffad7b";
export const url=new URL("../icons/arrow-elbow-right-thin.svg?v=55b348717701a0992316570c684f85662e67558d79e528f368ff2bb62806ad99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
