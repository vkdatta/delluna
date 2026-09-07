export const name="desk-thin";
export const id="dl_86baf7cec1904b9bb36d";
export const url=new URL("../icons/desk-thin.svg?v=1826e3c9a1fbb19a60f1fb467469869b93a60c81a9d0f919e203b9d69b71219d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
