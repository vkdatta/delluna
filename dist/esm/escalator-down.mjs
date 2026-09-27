export const name="escalator-down";
export const id="dl_eb7dcd9f394b4330b308";
export const url=new URL("../icons/escalator-down.svg?v=ec5d6314e68b9b062c466387eea4397dc79238145336230c098582a3446bdcdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
