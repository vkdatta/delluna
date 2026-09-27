export const name="sentiment_very_dissatisfied";
export const id="dl_8e94261ae1b2b5af988e";
export const url=new URL("../icons/sentiment_very_dissatisfied.svg?v=f34989a294b4986c5632406abd45af53ad24d2c7a2bd02696dac708e55c64040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
