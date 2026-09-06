export const name="exam-thin";
export const id="dl_6d4d59fa204d44b5b27d";
export const url=new URL("../icons/exam-thin.svg?v=e3347a0d65c626870c6dc42eb8ecd9ef437ca531fcc4ca70f22416b633e694a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
