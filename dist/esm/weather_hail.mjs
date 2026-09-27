export const name="weather_hail";
export const id="dl_35ed52b4e6ef736bc5da";
export const url=new URL("../icons/weather_hail.svg?v=f8e257b9997c1b7275748c9136721fd75ead280f07f0786192c20ef65e728366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
