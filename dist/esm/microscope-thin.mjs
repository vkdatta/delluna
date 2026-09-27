export const name="microscope-thin";
export const id="dl_4d81285c84b44d3e95a4";
export const url=new URL("../icons/microscope-thin.svg?v=fa4c033269adcc90470f6f158b93eef5f1a808666edf3378c58e53307af6c511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
