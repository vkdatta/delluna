export const name="camera-plus";
export const id="dl_a35291d0b8854d199e77";
export const url=new URL("../icons/camera-plus.svg?v=cb564b90b87f24a71d6a224229199ba10e0f181203844745aec1ac4b75fc3c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
