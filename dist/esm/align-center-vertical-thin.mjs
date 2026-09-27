export const name="align-center-vertical-thin";
export const id="dl_3a2ad89180aa4095be17";
export const url=new URL("../icons/align-center-vertical-thin.svg?v=b85eb78f0c0b4da06f120d1c2431945596260357e37e8a1650afa4cfa52c7522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
