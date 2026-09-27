export const name="share-fat-thin";
export const id="dl_f52b950cbed3fc6eebf0";
export const url=new URL("../icons/share-fat-thin.svg?v=6c8f51d6a1a2520e2333b90686255cefaada898c7e798ad49dc686b960f7d841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
