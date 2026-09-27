export const name="sentiment_frustrated-fill";
export const id="dl_2f0d31eac8c3ec5570ca";
export const url=new URL("../icons/sentiment_frustrated-fill.svg?v=457b671b22025cf93bb87642fdf052e4e131f7792670cf8edd2c5ce05c7a9032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
