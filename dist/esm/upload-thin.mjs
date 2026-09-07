export const name="upload-thin";
export const id="dl_cbef5a48230c4cf48c7f";
export const url=new URL("../icons/U/upload-thin.svg?v=bec180cae692dd0a739a4cd5f9df1d0325e26443997912da50ea74fd892a6dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
