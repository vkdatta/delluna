export const name="audio_description-fill";
export const id="dl_daebe76a2f17f979c2e9";
export const url=new URL("../icons/audio_description-fill.svg?v=9bfa7726043626e83f3bbba6156477f468fe5517f787f29aa06cfabd7c9f2f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
