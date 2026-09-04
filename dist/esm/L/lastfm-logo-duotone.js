export const name="lastfm-logo-duotone";
export const id="dl_b7f833d840ad40748177";
export const url=new URL("../../icons/L/lastfm-logo-duotone.svg?v=d84bc43dffb9944e8a095c15b99cf425d47d512a33a50ea2b158fd7b70ed3c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
