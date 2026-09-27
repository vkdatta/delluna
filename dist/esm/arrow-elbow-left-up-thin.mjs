export const name="arrow-elbow-left-up-thin";
export const id="dl_12a3106582bd45e0893a";
export const url=new URL("../icons/arrow-elbow-left-up-thin.svg?v=683676ac46f14500770873d120cf0b20a13f9ef9751523bebff0cbf542c88a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
