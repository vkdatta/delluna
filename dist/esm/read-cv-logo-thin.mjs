export const name="read-cv-logo-thin";
export const id="dl_4b117b1dae9a4d57bb11";
export const url=new URL("../icons/read-cv-logo-thin.svg?v=53b2d5f9dcf4c38b1c0ab7daee68436f01fcfb77ddd6fc074d81d9fe97b31b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
